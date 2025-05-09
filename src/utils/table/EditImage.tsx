interface EditImageProps {
  image: string;
  className?: string;
  onClick?: () => void;
}

const EditImage = ({ image, className, onClick }: EditImageProps) => {
  return (
    <img
      onClick={onClick}
      className={
        "w-3 h-3 md:w-5 md:h-5 hover:bg-b hover:rounded-full cursor-pointer hover:scale-120 transition duration-300 " +
        className
      }
      src={image}
      alt="Edit icon svg"
    />
  );
};

export default EditImage;
