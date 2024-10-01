import PropTypes from 'prop-types';
export default function ContactCard({img, name, phone, email}) {
  return (
    <div className="flex justify-center flex-wrap gap-[40px]">
      <div className="flex flex-col basis-[225px] bg-white rounded-[10px] shadow-[1px_1px_8px_rgba(0,0,0,0.25)] p-[13px] pb-[20px]  gap-[1px]">
        <img
          className="w-[100%] h-auto rounded-[5px] self-center object-cover"
          src={img}
        />
        <h3 className="font-[700] text-[18px] mb-[15px]">{name}</h3>
        <div className="flex items-center">
          <img
            className="h-[11px] mr-[8px]"
            src="https://i.pinimg.com/736x/33/74/f8/3374f84310d608d74314b06797d29822.jpg"
          />
          <p className="text-[12px] text-[#2B283A]">{phone}</p>
        </div>
        <div className="flex items-center">
          <img
            className="h-[11px] mr-[8px]"
            src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
          />
          <p className="text-[12px] text-[#2B283A]">{email}</p>
        </div>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
}
