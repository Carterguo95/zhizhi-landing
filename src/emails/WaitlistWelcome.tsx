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
            <Preview>欢迎加入 ZHIZHI 候补名单 | Welcome to ZHIZHI</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={heading}>✨ 欢迎来到 ZHIZHI</Heading>

                    <Text style={paragraph}>
                        您好，
                    </Text>
                    <Text style={paragraph}>
                        感谢您 ({email}) 关注 ZHIZHI。您已经成功加入我们的内部测试候补名单！
                    </Text>
                    <Text style={paragraph}>
                        ZHIZHI 是一个基于千万级原生语料库构建的智能演化命理飞轮。我们正在结合古老的命运映射图谱与现代 AI 深度推理技术，旨在为您提供前所未有的颗粒度与精准解析。
                    </Text>
                    <Text style={paragraph}>
                        目前我们正在进行 V1.0 版本的内部封闭开发和打磨。当您的内测权限正式开通时，我们会第一时间通过这封邮件通知您。
                    </Text>

                    <Section style={btnContainer}>
                        <Link style={button} href="https://zhizhi.one">
                            访问官网了解最新动态
                        </Link>
                    </Section>

                    <Hr style={hr} />

                    <Text style={footer}>
                        流年无声，知之有迹。<br />
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
