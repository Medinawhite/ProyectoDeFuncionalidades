import React from "react";
import { useForm } from "react-hook-form";
import style from "./FormularioShow.module.css";
// import swal from "sweetalert";

const FormShow = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    
  };

  return (
    <div className={style.formShowContainer}>

      <div className={style.formShowCreate}>
        <div className="text-center padding">
          <h1>Agrega un Espectáculo</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <div className="col-md-12">
            <label className="form-label">Nombre</label>
            <input
              title="Nombre del Espectáculo"
              type="text"
              name="name"
              placeholder="Nombre de la obra"
              className="form-control"
              {...register("name", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.name && errors.name.message}
            </span>
          </div>
          <div className="col-md-12">
            <label className="form-label">Descripción</label>
            <textarea
              title="Descripción del espectáculo 1000 caracteres max"
              type="text"
              name="summary"
              width="100"
              height="30"
              maxLength="1000"
              placeholder="Descripción de la Obra. Máximo 1000 caracteres."
              className="form-control"
              {...register("summary", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                maxLength: {
                  value: 1000,
                  message: "No se pueden más de 1000 caracteres",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.summary && errors.summary.message}
            </span>
          </div>

          <div className="col-md-6">
            <label className="form-label col-lg-12">Género</label>
            <select
              defaultValue=""
              name="genre"
              className="form-control "
              {...register("genre", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            >
              <option selected disabled="disabled" value="">
                Selecciona un género
              </option>

              <option>Comedia</option>
              <option>Drama</option>
              <option>Tragedia</option>
              <option>Tragicomedia</option>
              <option>Monólogo</option>
              <option>Ópera</option>
              <option>Musical</option>
              <option>Danza</option>
            </select>
            <span className="text-danger text-small d-block mb-2">
              {errors.genre && errors.genre.message}
            </span>
          </div>

          <div className="col-md-6">
            <label className="form-label col-lg-12">Tipo de Público</label>
            <select
              defaultValue=""
              name="rated"
              className="form-control "
              {...register("rated", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            >
              <option selected disabled="disabled" value="">
                Seleccione el Tipo de Público
              </option>
              <option>Todas las edades</option>
              <option>Apta para mayores de 13 años</option>
              <option>Apta para mayores de 16 años</option>
              <option>Apta para mayores de 18 años</option>
            </select>
            <span className="text-danger text-small d-block mb-2">
              {errors.rated && errors.rated.message}
            </span>
          </div>

          <div className="col-md-4">
            <label className="form-label">Hora</label>
            <input
              title="Ingrese la hora del comienzo del espectaculo"
              type="time"
              name="time"
              className="form-control "
              {...register("time", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.time && errors.time.message}
            </span>
          </div>

          <div className="col-md-4">
            <label className="form-label col-lg-12">Duración</label>
            <input
              title="No se admiten números negativos ni decimales"
              type="number"
              name="length"
              placeholder="Minutos de la Obra"
              className="form-control "
              {...register("length", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /^(0|[1-9][0-9]*)$/,
                  message: "No se admiten números negativos ni decimales",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.length && errors.length.message}
            </span>
          </div>

          <div className="col-md-4">
            <label className="form-label col-lg-12">Fecha</label>
            <input
              title="Solo se puden agregar espectáculos con un máximo de 48h del comienzo del espectáculo"
              type="date"
              name="date"
              className="form-control "
              {...register("date", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.date && errors.date.message}
            </span>
          </div>

          <div className="col-md-6">
            <label className="form-label col-lg-12">Imagen</label>
            <input
              type="url"
              name="image"
              className="form-control "
              {...register("image", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.image && errors.image.message}
            </span>
          </div>

          <div className="col-md-6">
            <label className="form-label col-lg-12">Precio Original</label>
            <input
              title="Precio original de la obra, el descuento se hace dinamicamente cada 6h empieza con 30% y termina en un 10%"
              type="number"
              name="originPrice"
              className="form-control "
              placeholder="Precio por entrada"
              {...register("originPrice", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.originPrice && errors.originPrice.message}
            </span>
          </div>


          <br />

          <div className="col-md-12">
            <button className="btn btn-dark" type="submit">
              Agregar Espectáculo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormShow;