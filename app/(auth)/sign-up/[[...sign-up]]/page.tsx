'use client'
import EventForm from "@/components/shared/EventForm";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type FormProps = {
  role: "student" | "company"
}

export default function Page() {

  const router = useRouter();
  const pathname = usePathname();

  const [role, setRole] = useState<FormProps["role"]>("student");

  useEffect(() => {
    if (pathname.includes("company")) {
      setRole("company");
    } else {
      setRole("student");
    }
  }, []);

  return (
    <>
      <EventForm role={role} />
    </>
  );
}