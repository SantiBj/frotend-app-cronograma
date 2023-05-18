export function BtnConfirm({ text , action }) {
    return(
        <button
          onClick={action}
          className="bg-Green py-[5px] px-[10px] rounded-lg font-medium duration-300 
                      hover:scale-110 hover:brightness-125 cursor-pointer"
        >
          { text }
        </button>
    )
}