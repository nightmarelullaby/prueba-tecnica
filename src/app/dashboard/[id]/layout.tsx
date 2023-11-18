import Link from "next/link"
export default function DashboardLayout({children}:{children:React.ReactNode}){
	return <><header>
		<nav>
			<Link href="/dashboard">Go to dashboard</Link>
		</nav>
	</header>
	{children}
	</>
}