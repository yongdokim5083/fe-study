import {Suspense} from "react";
import {Outlet} from "react-router-dom";

function Layout() {
	return (
		<div>
			<Suspense fallback="loading...">
				<Outlet />
			</Suspense>
		</div>
	);
}

export default Layout;