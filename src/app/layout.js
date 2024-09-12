import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Test App",
  description: "Just Test App",
};

export default function RootLayout({ children }) {
  return (
			<html lang="en">
				<body
					className={`${inter.variable}`}
				>
					{children}
				</body>
			</html>
		);
}
