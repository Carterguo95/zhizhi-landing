// ============================================================
// ZHIZHI Waitlist — Google Apps Script
// ============================================================
// 使用方法:
// 1. 新建一个 Google Sheet
// 2. 在第一行写上列名: email | timestamp | source
// 3. 打开 扩展程序 → Apps Script
// 4. 把这个文件的内容粘贴进去，替换默认代码
// 5. 点击 部署 → 新建部署
// 6. 类型选择 "Web 应用"
// 7. 执行身份选 "我"，访问权限选 "任何人"
// 8. 点击部署，复制生成的 URL
// 9. 将 URL 填入项目的 .env.local 文件中的 GOOGLE_SCRIPT_URL
// ============================================================

function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);
        var email = data.email;

        // Check for duplicate
        var emails = sheet.getRange("A:A").getValues().flat();
        if (emails.includes(email)) {
            return ContentService
                .createTextOutput(JSON.stringify({ success: false, error: "already_registered" }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // Append new row
        sheet.appendRow([
            email,
            new Date().toISOString(),
            data.source || "landing_page"
        ]);

        return ContentService
            .createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Optional: handle GET requests for testing
function doGet() {
    return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", message: "ZHIZHI Waitlist API is running" }))
        .setMimeType(ContentService.MimeType.JSON);
}
