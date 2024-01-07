import React from "react";

const Card = ({ name = "NV", post = "Not Assigned Yet" }) => {
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              sunt magnam qui recusandae! Ad repellat, tenetur incidunt eaque
              minus cum consequuntur nemo necessitatibus eius fuga ratione
              facilis corporis, eum numquam quam magnam illum. Quae veritatis
              unde facilis placeat, optio sapiente laborum ratione sunt
              temporibus eligendi. Expedita totam perspiciatis, explicabo,
              dolores magni itaque enim eligendi ratione error porro, sequi
              quaerat. Excepturi molestiae quo id quaerat at et enim reiciendis?
              Qui neque adipisci corrupti, itaque iste recusandae reprehenderit,
              quod et assumenda blanditiis iusto esse ipsum sint ea vero vitae
              voluptates magni, sequi quidem obcaecati. Illum, aliquid
              perferendis. Id repudiandae unde ratione nesciunt.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">
             {post}
            </div>
          </figcaption>
        </div>
      </figure>
      {/* <img
        src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <h1 className="text-2xl bg-green-500 p-3">Photo Card</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
        consequuntur.
      </p> */}
    </>
  );
};

export default Card;
