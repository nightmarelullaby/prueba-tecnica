import Link from "next/link"
import {Text} from '../../../lib/tremor-components'

export default function DashboardLayout({children}:{children:React.ReactNode}){
	return <><header>
		<nav>
			<Link href="/dashboard">
				<Text className="text-center">Go to dashboard</Text>
			</Link>
		</nav>
	</header>
	{children}
	</>
}