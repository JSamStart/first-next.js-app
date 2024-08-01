import React, { CSSProperties } from "react";

import { Html, Body, Container, Text, Link, Preview, Tailwind } from "@react-email/components";

export const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome...</Preview>
            <Tailwind>
                <Body style={body}>
                    <Container>
                        <Text style={heading}>Hello {name}</Text>
                        <Text className="font-bold text-3xl">some more text</Text>
                        <Link href="https://google.de">www.google.de</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

const body: CSSProperties = { background: "#fff" };
const heading: CSSProperties = { fontSize: "32px" };
