const Item = ({ item }) => {
   return (
      <tr className="flex border border-black px-5 py-2 gap-5">
         <td className="flex-1 truncate">{item.title}</td>
         <td className="flex-1 truncate">{item.rating}</td>
         <td className="flex-1 truncate">{item.category}</td>
      </tr>
   );
}

export default Item;