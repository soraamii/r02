const ListPageComponent = ({movePage, start, end, prev, next, pageNums, page}) => {
   
  const handleClickPage = (pageNums) => {
     movePage(pageNums)
  }


  return (  
     <div className="m-4 p-2 justify-center">
        <ul className="flex">
              {prev ? <li
              className="m-2 p-2 border-2 font-bold rounded"
              onClick={() => handleClickPage(start -1)}
              >Prev</li> : <></>}

              {pageNums.map(num => <li key={num} 
              className="m-2 p-2 text-[#418613] border-2 font-bold rounded"
              onClick={() => handleClickPage(num)}>
                {page === num ? <span className="text-[#707070]">{num}</span> : <span>{num}</span>}
                </li>)}

              {next ? <li
              className="m-2 p-2 border-2 font-bold rounded"
              onClick={() => handleClickPage(end +1)}>Next</li> : <></>}
        </ul>
     </div>
  );
}

export default ListPageComponent;