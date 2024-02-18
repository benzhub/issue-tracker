"use client";

import { Select } from "@radix-ui/themes";
import { statuses } from "./IssueStatuses";
import React from "react";
import { useRouter } from "next/navigation";


const IssueStatusFilter = () => {
  const router = useRouter();
  return (
    <Select.Root onValueChange={(status)=>{
      const query = status !== '_' ? `?status=${status}` : '';
      router.push(`/issues/list${query}`)
    }}>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || "_"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
