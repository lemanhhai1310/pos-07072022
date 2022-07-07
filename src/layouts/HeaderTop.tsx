import {Menu, Layout} from "antd";
import React from "react";


const Header: React.FC = () => {
	return (
		<Header style={{ padding: '0 30px' }}>
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				items={new Array(15).fill(null).map((_, index) => {
					const key = index + 1;
					return {
						key,
						label: `Đơn hàng ${key}`,
					};
				})}
			/>
		</Header>
	)
}
export default Header;