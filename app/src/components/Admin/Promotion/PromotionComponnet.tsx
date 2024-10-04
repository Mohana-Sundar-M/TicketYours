import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const promotions = [
  { id: 1, imageUrl: 'https://th.bing.com/th/id/OIP.Bya2CoSMfLDMpg_i8VvUaAHaJ4?w=182&h=243&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Coca-Cola' },
  { id: 2, imageUrl: 'https://th.bing.com/th/id/OIP.2Xsi8PxJNKjWIRVhZM233wHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Zomato' },
  { id: 3, imageUrl: 'https://th.bing.com/th/id/OIP.6sWex-z184ZsyxCmSdVmwAHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Flipkart' },
  { id: 4, imageUrl: 'https://th.bing.com/th/id/OIP.w-ee5ejFjbeLrG9y_oJ98gHaJ4?w=128&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Uber' },
  { id: 5, imageUrl: 'https://th.bing.com/th/id/OIP.2Xsi8PxJNKjWIRVhZM233wHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Zomato' },
  { id: 6, imageUrl: 'https://th.bing.com/th/id/OIP.6sWex-z184ZsyxCmSdVmwAHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Flipkart' },
  { id: 7, imageUrl: 'https://th.bing.com/th/id/OIP.w-ee5ejFjbeLrG9y_oJ98gHaJ4?w=128&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Uber' }
];

const PromotionComponent: React.FC = () => {
  return (
    <div className="ml-64 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Promotions Management</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Promotion
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="bg-white shadow-md rounded-lg flex flex-col justify-between h-64 w-44">
            <img 
              src={promotion.imageUrl} 
              alt={promotion.title} 
              className="h-48 w-full object-cover object-fill rounded-t-lg" 
            />
            <div className="flex justify-between items-center px-2 py-2">
              <FontAwesomeIcon icon={faTrashAlt} className="text-gray-400 hover:text-red-600 cursor-pointer" />
              <FontAwesomeIcon icon={faPlus} className="text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionComponent;
