import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function InputOTPPattern() {
  const [otpValue, setOtpValue] = useState("");
  const router = useRouter();
  const handleConfirmOTP = (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      router.push("/forgetpass/newpass");
    }
  };
  return (
    <InputOTP
      maxLength={4}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      value={otpValue}
      onChange={handleConfirmOTP}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}
