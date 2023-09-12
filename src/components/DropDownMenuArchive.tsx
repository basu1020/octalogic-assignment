import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { MoreVertical } from 'lucide-react';

export const DropdownMenuArchive: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreVertical className="text-gray-400 rounded-lg hover:text-gray-700 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Unarchive Course</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}