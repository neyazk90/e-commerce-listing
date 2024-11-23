
import style from './loader.module.css'
const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-4">
          <div className={ style.loader}></div>
    </div>
  );
};

export default Loader;
