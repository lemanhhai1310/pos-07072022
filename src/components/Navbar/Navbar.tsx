import React, {useState} from 'react';
import './Navbar.scss';
import {Select} from "antd";
const {Option} = Select;

const children:any = [];
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i}>
		<div className="uk-grid-small uk-grid uk-flex-middle" data-uk-grid>
			<div className="uk-width-auto">
				<div className="uk-cover-container uk-border-rounded">
					<img src="https://picsum.photos/60/60/?random" alt="" data-uk-cover/>
					<canvas width={60} height={60}></canvas>
				</div>
			</div>
			<div className="uk-width-expand">
				<div className="uk-grid-small uk-grid" data-uk-grid>
					<div className="uk-width-expand">
						<h3 className="navbar__droprender__name">Yến mạch Captain Oats - Quick Cook 1kg</h3>
						<div>tinhte</div>
					</div>
					<div className="uk-width-auto">
						<div className="navbar__droprender__price">290.000 đ</div>
					</div>
				</div>
			</div>
		</div>
	</Option>);
}

const OPTIONS = [
	{
		id:1,
		name:'Đằng sau sự biến mất của Ronaldo ở MU',
		image: 'https://picsum.photos/60/60/?random',
	},
	{
		id:555,
		name:'Yến mạch Captain Oats - Quick Cook 2kg',
		image: 'https://picsum.photos/80/80/?random',
	},
];

const Navbar = () => {
	const [selectedItems, setSelectedItems] = useState<any[]>([]);
	const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

	console.log(filteredOptions);
	return (
		<nav className="navbar navbar__container">
			<div className="navbar__left">
				<div className="navbar__item">
					<Select
						mode="multiple"
						value={selectedItems}
						onChange={setSelectedItems}
						allowClear
						style={{ width: '548px' }}
						placeholder="Tên hoặc mã sản phẩm (F2)"
						dropdownClassName={'navbar__droprender'}
						listHeight={472}
						size={'large'}
					>
						{filteredOptions.map(item => (
							<Select.Option key={item.id} value={item.name}>
								<div className="uk-grid-small uk-grid uk-flex-middle" data-uk-grid>
									<div className="uk-width-auto">
										<div className="uk-cover-container uk-border-rounded">
											<img src={item.image} alt="" data-uk-cover/>
											<canvas width={60} height={60}></canvas>
										</div>
									</div>
									<div className="uk-width-expand">
										<div className="uk-grid-small uk-grid" data-uk-grid>
											<div className="uk-width-expand">
												<h3 className="navbar__droprender__name">{item.name}</h3>
												<div>tinhte</div>
											</div>
											<div className="uk-width-auto">
												<div className="navbar__droprender__price">290.000 đ</div>
											</div>
										</div>
									</div>
								</div>
							</Select.Option>
						))}
					</Select>
				</div>
				<div className="navbar__item">
					2
				</div>
			</div>
			<div className="navbar__right">
				<div className="navbar__item">
					3
				</div>
			</div>
		</nav>
	)
}
export default Navbar;