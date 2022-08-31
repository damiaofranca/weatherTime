import { format } from "date-fns";
import React, { useMemo, useState } from "react";
import { Container } from "./styles";

export const Timer: React.FC = () => {
	const [time, setTime] = useState<string>("");

	setInterval(() => {
		setTime(format(new Date(), "hh:mm"));
	}, 1000);
	return <Container>{time}</Container>;
};
