'use client'
import { ReactNode } from "react"
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl"
import { getTimeZone } from "next-intl/server";

type Props = {
    messages: AbstractIntlMessages;
    locale: string;
    children: ReactNode;
    now: Date;
    timeZone: string;
};

export default function NextIntlProvider({
    messages,
    locale,
    children,
    now,
    timeZone
}:Props) {
    return (
        <NextIntlClientProvider
        locale={locale}
        messages={messages}
        defaultTranslationValues={{
            i: (text) => <i>{text}</i>
        }}
        now={now}
        timeZone={timeZone}
        >
            {children}
        </NextIntlClientProvider>
    )
}
