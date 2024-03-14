function qInput() {
    return (
        <div>
            <label htmlFor="Quantity" className="sr-only"> Quantity </label>

            <div className="flex items-center gap-1">
                <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                    &minus;
                </button>

                <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className="h-10 w-24 rounded border-gray-200 sm:text-sm"
                />

                <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                    &plus;
                </button>
            </div>
        </div>

    );
}

export default qInput;