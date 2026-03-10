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
            <Preview>欢迎加入知之 ZHIZHI 核心内测名单 | Welcome to ZHIZHI</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={heading}>✨ 欢迎加入知之 ZHIZHI</Heading>

                    <Text style={paragraph}>
                        您好，{email}：
                    </Text>
                    <Text style={paragraph}>
                        感谢您的驻足。您已成功获得了 <strong>知之 ZHIZHI V1.0</strong> 核心内测版本的优先候补资格。
                    </Text>
                    <Text style={paragraph}>
                        在这里，古老的东方命理图谱正在与前沿的 AI 深度推理发生跨越时空的碰撞。知之不仅仅是一款解析工具，更是一个得益于千万级数据强化学习、能够一直伴随您共同进化的生命罗盘。
                    </Text>
                    <Text style={paragraph}>
                        为了保证绝佳的颗粒度与专注的演化算力，我们目前采用预约制逐步邀请开放。当您的专属通道就绪时，我们将在第一时间通过这封邮件向您发放内测密匙。
                    </Text>

                    <Section style={btnContainer}>
                        <Link style={button} href="https://zhizhi.one">
                            重返知之ZHIZHI
                        </Link>
                    </Section>

                    <Text style={paragraphCenter}>
                        在此期间，您可以关注我们的 X 官方平台{" "}
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
