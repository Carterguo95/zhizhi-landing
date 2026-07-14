import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface WaitlistWelcomeEmailProps {
    email: string;
}

export const WaitlistWelcomeEmail = ({
    email,
}: WaitlistWelcomeEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>你的知之内测申请已收到</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={heading}>你的内测申请已收到</Heading>

                    <Text style={paragraph}>
                        你好：
                    </Text>
                    <Text style={paragraph}>
                        谢谢你愿意来了解知之。我们已经把你加入内测名单。
                    </Text>
                    <Text style={paragraph}>
                        知之会结合你的个人命盘、当下时间和过去的记录，帮你看见最近最值得留意的问题，再一步步把原因和选择问清楚。
                    </Text>
                    <Text style={paragraph}>
                        我们会分批开放体验。轮到你时，会通过 {email} 发送邀请。
                    </Text>

                    <Section style={btnContainer}>
                        <Link style={button} href="https://zhizhi.one">
                            回到知之官网
                        </Link>
                    </Section>

                    <Text style={paragraphCenter}>
                        想了解产品进展，可以关注我们的 X 账号{" "}
                        <Link style={link} href="https://x.com/zhizhiapp">
                            @zhizhiapp
                        </Link>
                        ，获取最新动态。
                    </Text>

                    <Hr style={hr} />

                    <Text style={footer}>
                        流年无声，知之有迹<br />
                        ZHIZHI Team
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default WaitlistWelcomeEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "40px 20px",
    maxWidth: "560px",
    backgroundColor: "#fafafa",
    border: "1px solid #eaeaea",
    borderRadius: "12px",
    marginTop: "40px",
};

const heading = {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "400",
    color: "#1a1a1a",
    padding: "0",
    marginTop: "0",
    marginBottom: "24px",
    textAlign: "center" as const,
};

const paragraph = {
    margin: "0 0 15px",
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#4a4a4a",
    fontWeight: "300",
};

const btnContainer = {
    textAlign: "center" as const,
    marginTop: "32px",
    marginBottom: "32px",
};

const button = {
    backgroundColor: "#1a1a1a",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 24px",
    fontWeight: "500",
};

const paragraphCenter = {
    ...paragraph,
    textAlign: "center" as const,
    marginTop: "16px",
};

const link = {
    color: "#1a1a1a",
    textDecoration: "underline",
    fontWeight: "500",
};

const hr = {
    borderColor: "#e6e6e6",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "1.5",
    textAlign: "center" as const,
};
