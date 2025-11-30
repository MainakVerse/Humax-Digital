// app/api/contact/route.ts
import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      fullName,
      companyName,
      workEmail,
      phone,
      service,
      message,
      consent,
    } = body

    // Basic validation (server-side)
    if (!fullName || !companyName || !workEmail || !phone || !service || !consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    await sql`
      INSERT INTO contacts 
        (full_name, company_name, work_email, phone, service, message, consent)
      VALUES
        (${fullName}, ${companyName}, ${workEmail}, ${phone}, ${service}, ${message}, ${consent})
    `

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error("Error saving contact:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
