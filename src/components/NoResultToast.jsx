"use client";

import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function NoResultToast({ show }) {
  const shown = useRef(false);

  useEffect(() => {
    if (show && !shown.current) {
      toast.dismiss();
      toast.error("No courses found");
      shown.current = true;
    }
  }, [show]);

  return null;
}