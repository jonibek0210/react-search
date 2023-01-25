import TextField from '@mui/material/TextField';

const Thead = ({ setValue, setChengeSelect }) => {
   return (
      <div className="flex gap-5 max-sm:flex-col">
         <TextField onChange={(event) => setValue(event.target.value)} className='flex-1' id="outlined-basic" label="Search field" variant="outlined" />

         <select defaultValue={'DEFAULT'} onClick={(event) => console.log(event.target.value)} className="flex-1 border border-gray-300 rounded px-3 py-3">
            <option value="DEFAULT" disabled>any rating</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Thriller</option>
            <option>Drama</option>
         </select>

         <select defaultValue={'DEFAULT'} onClick={(event) => console.log(event.target.value)} className="flex-1 border border-gray-300 rounded px-3 py-3">
            <option value="DEFAULT" disabled>any rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
         </select>
      </div>
   );
}

export default Thead;