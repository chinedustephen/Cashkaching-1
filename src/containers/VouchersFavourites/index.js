import React from "react";
import styled from "styled-components";
import VoucherCard from "../../components/VoucherCard";

const NestedHalfCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: minmax(396px, auto);
	grid-gap: 1em;
	@media only screen and (max-width: 724px) {
		grid-template-columns: 1fr;
	}
`;

const VouchersFavourites = () => (
	<div>
		<NestedHalfCards>
			<VoucherCard />
			<VoucherCard />
		</NestedHalfCards>
	</div>
);
export default VouchersFavourites;
