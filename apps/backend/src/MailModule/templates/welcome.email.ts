export const welcomeEmailTemplate = (fullName: string, verificationLink: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Tuesday, ${fullName}!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: #fff;
            padding: 20px;
        }
        h1 {
            color: #4CAF50;
        }
        p {
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Tuesday, ${fullName}!</h1>
        <p>Dear ${fullName},</p>
        <p>Thank you for joining Tuesday! We are excited to have you on board.</p>
        <p>To get started, please verify your email address by clicking the button below:</p>
        <a href="${verificationLink}" class="button">Verify Email</a>
        <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
    </div>
</body>
</html>
`;