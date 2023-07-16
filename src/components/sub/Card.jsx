const Card = ({ openModal, img, title, content }) => {
  return (
    <>
      <div class="card bg-base-100">
        <figure>
          <img src={img} loading="lazy"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>{content}</p>
          <div class="card-actions justify-end">
            <button onclick={() => openModal(title, content)} class="btn btn-primary">
              Open Modal
            </button>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Card;
