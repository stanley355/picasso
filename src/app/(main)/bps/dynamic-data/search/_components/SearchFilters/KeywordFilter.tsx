'use client'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {ChangeEvent, useRef} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const BpsDynamicDataSearchKeywordFilter = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const typingTimeoutRef = useRef<any>(null);

    const onSearch = (e:ChangeEvent<HTMLInputElement>) => {
       if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current)
       }

       typingTimeoutRef.current = setTimeout(()=> {
          const searchValue = e.target.value.toLowerCase().replaceAll(" ", "+");

           const urlParams = new URLSearchParams(window.location.search);
           urlParams.set("page", "1");
           urlParams.set("keyword", searchValue);
           const newQueryString = urlParams.toString();
           const newPath = pathname + "?" + newQueryString;
           router.replace(newPath);
       }, 500)
    }

    return (
        <div>
            <Label id="keyword" className="text-xs">1 Word Keyword:</Label>
            <Input id="keyword" name="keyword" placeholder={searchParams.get("keyword") ? searchParams.get("keyword") as string : "iklim/geografi/kemiskinan"} onChange={onSearch} className="h-8 placeholder:text-xs" />
        </div>
    )
};

export default BpsDynamicDataSearchKeywordFilter;