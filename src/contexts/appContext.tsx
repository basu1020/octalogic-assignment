import { SetStateAction, createContext, useState, Dispatch, ReactNode } from "react"

import info from "@/info.json"

export type CurrTab = {
    value: String
}

export type AppInfo = {
    data: {
        courseData: {
            Name: string;
            Description: string;
            Instructor: string;
            Instrument: string;
            dayOfWeek: string;
            noOfStudents: number;
            Price: string;
            Status: string;
            Actions: string;
        }[]; 
        latestInvoices: {
            invoiceId: string;
            studentName: string;
            courseName: string;
            feesPaid: string;
            enrollmentDate: string;
        }[];
        bestStudents: {
            RegNo: string;
            FName: string;
            LName: string;
            CourseNo: string;
            TotalFees: string;
            RegDate: string;
        }[];
        cardsList: {
            name: string;
            description: string;
        }[];
    };
};

export interface AppContextInterface {
    currTab: CurrTab,
    setCurrTab: Dispatch<SetStateAction<CurrTab>>
    appInfo: AppInfo,
    setAppInfo: Dispatch<SetStateAction<AppInfo>>
}

const defaultState = {
    currTab: {
        value: 'Home'
    },
    setCurrTab: (currTab: CurrTab) => { },
    appInfo: {
        data: info
    },
    setAppInfo: (appInfo: AppInfo) => { }
} as AppContextInterface

export const AppContext = createContext(defaultState)

type AppProviderProps = {
    children: ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
    const [currTab, setCurrTab] = useState<CurrTab>({
        value: 'Home'
    })
    const [appInfo, setAppInfo] = useState<AppInfo>({
        data: info
    })

    localStorage.setItem('appInfo', JSON.stringify(appInfo))

    return (
        <AppContext.Provider value={{ currTab, setCurrTab, appInfo, setAppInfo }}>
            {children}
        </AppContext.Provider>
    )
}