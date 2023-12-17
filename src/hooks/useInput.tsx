import React, { useState, useCallback } from "react";

const useInput = (initialValue: string) => {
	const [value, setValue] = useState<string>(initialValue);
	const reset = useCallback(() => {
		setValue("");
	}, []);
	return { value, reset, setValue };
};

export default useInput;
