const Item = ({ item }) => {
   return (
      <li className="flex border border-black px-5 py-2 gap-5">
         <p className="flex-1 truncate">{item.title}</p>
         <p className="flex-1">{item.rating}</p>
         <p className="flex-1 truncate">{item.category}</p>
      </li>
   );
}

export default Item;