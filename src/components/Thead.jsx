import TextField from '@mui/material/TextField';

const Thead = () => {
   return (
      <thead className="flex gap-5">
         <TextField className='flex-1' id="outlined-basic" label="Search field" variant="outlined" />

         <select className="flex-1 border border-gray-300 rounded">
            <option>any rating</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Thriller</option>
            <option>Drama</option>
         </select>

         <select className="flex-1 border border-gray-300 rounded">
            <option>any rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
         </select>
      </thead>
   );
}

export default Thead;