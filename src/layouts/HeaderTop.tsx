import {Menu, Layout, AutoComplete} from "antd";
import React, {useState} from "react";
const { Header } = Layout;

const mockVal = (str: string, repeat = 1) => ({
	value: str.repeat(repeat),
});

const HeaderTop = () => {
	const [value, setValue] = useState('');
	const [options, setOptions] = useState<{ value: string }[]>([]);

	const onSearch = (searchText: string) => {
		setOptions(
			!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
		);
	};

	const onSelect = (data: string) => {
		console.log('onSelect', data);
	};

	const onChange = (data: string) => {
		setValue(data);
	};
	return (
		<Header className="" style={{ padding: '0 0px' }}>
			<AutoComplete
				options={options}
				style={{ width: 548 }}
				onSelect={onSelect}
				onSearch={onSearch}
				placeholder="input here"
			/>
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				items={new Array(3).fill(null).map((_, index) => {
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
export default HeaderTop;