import Item from './components/Item';
import Thead from './components/Thead';

const data = [
	{
		id: 1,
		title: "The Matrix",
		rating: 7.5,
		category: 'Action'
	},
	{
		id: 2,
		title: "Focus",
		rating: 6.9,
		category: 'Comedy'
	},
	{
		id: 3,
		title: "The Lazarus Effect",
		rating: 6.4,
		category: 'Thriller'
	},
	{
		id: 4,
		title: "Everly",
		rating: 5.0,
		category: 'Action'
	},
	{
		id: 5,
		title: "Maps to the Stars",
		rating: 7.5,
		category: 'Drama'
	}
]

function App() {
	return (
		<div className="container m-auto mt-20 px-6">
			<Thead />
			<tbody className='flex flex-col gap-5 mt-10'>
				{
					data.map(item => <Item key={item.id} item={item} />)
				}
			</tbody>
		</div>
	);
}

export default App;
