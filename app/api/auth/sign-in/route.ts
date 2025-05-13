import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, createToken, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password, callbackUrl } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return new NextResponse("Invalid credentials", { status: 400 });
    }

    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      return new NextResponse("Invalid credentials", { status: 400 });
    }

    const token = await createToken({
      id: user.id,
      role: user.role,
    });

    setAuthCookie(token);

    // Update last login
    await prisma.user.update({
      where: { email },
      data: { lastLogin: new Date() },
    });

    const redirectUrl = "/";

    const finalCallbackUrl =
      callbackUrl && callbackUrl !== "" ? callbackUrl : redirectUrl;

    return NextResponse.json({
      callbackUrl: finalCallbackUrl,
    });
  } catch (error) {
    console.error("Login error:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}
