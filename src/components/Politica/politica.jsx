import React, { useState } from "react";
import './style.scss';
import { useEffect } from 'react';


const Politica = () => {
    

    // Estado para manejar si el checkbox está marcado o no
    const [isChecked, setIsChecked] = useState(false);

    // Función que maneja el cambio en el estado del checkbox
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="fog">
            <div className="politica rounded-lg shadow-lg w-3/4 mx-auto bg-white p-8">

                <span className="title text-2xl font-bold mb-4 block">Términos y Condiciones</span>

                <div className="box-politica">
                    <p className="mb-4">
                        Bienvenido, soy Gonzalo Ezequiel Adami. Estos Términos y Condiciones rigen el uso del sitio web y los servicios ofrecidos por mí. Al contratar mis servicios, aceptas cumplir con estos términos. Si no estás de acuerdo con alguno de estos términos, por favor, no utilices mis servicios.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">1. Servicios Ofrecidos</p>
                    <p className="mb-4">
                        Ofrezco servicios de diseño y desarrollo de sitios web para grandes empresas y pequeños negocios. Mis servicios incluyen, pero no se limitan a, el diseño gráfico, desarrollo web, mantenimiento y soporte técnico.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">2. Contrato y Acuerdo</p>
                    <p className="mb-4">
                        La aceptación de una propuesta por parte del cliente constituye un acuerdo vinculante. El contrato entrará en vigor en el momento de la firma y se mantendrá hasta la finalización del proyecto o la terminación anticipada conforme a los términos establecidos.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">3. Pagos y Facturación</p>
                    <p className="mb-4">
                        Todos los pagos se deben realizar conforme a las condiciones especificadas en la propuesta. Los pagos deben efectuarse en los plazos acordados. En caso de retraso en el pago, me reservo el derecho de suspender el trabajo hasta que se reciban los pagos adeudados.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">4. Propiedad Intelectual</p>
                    <p className="mb-4">
                        Los derechos de propiedad intelectual de todos los trabajos entregados, incluidos, entre otros, los derechos de autor, pertenecerán a mí hasta que se reciba el pago completo. Tras el pago total, los derechos serán transferidos al cliente.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">5. Responsabilidades del Cliente</p>
                    <p className="mb-4">
                        El cliente es responsable de proporcionar toda la información y contenido necesario para la realización del proyecto. Cualquier retraso en la entrega de estos materiales por parte del cliente puede afectar los plazos de entrega.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">6. Cambios y Revisiones</p>
                    <p className="mb-4">
                        Se incluyen tres de revisiones gratuitas como parte del proyecto. Cualquier cambio adicional o solicitud fuera del alcance inicial del proyecto puede incurrir en costos adicionales.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">7. Cancelación y Terminación</p>
                    <p className="mb-4">
                        En caso de cancelación del proyecto por parte del cliente, se deberá pagar una tarifa de cancelación, que se especificará en la propuesta. Me reservo el derecho de cancelar el proyecto si el cliente no cumple con los términos del acuerdo.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">8. Garantías y Limitación de Responsabilidad</p>
                    <p className="mb-4">
                        No garantizo que el sitio web sea libre de errores o que funcionará sin interrupciones. No soy responsable de daños indirectos o consecuentes que puedan surgir del uso del sitio web.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">9. Modificaciones de los Términos</p>
                    <p className="mb-4">
                        Me reservo el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas en el momento de su publicación en el sitio web.
                    </p>
                    <br />
                    <p className="font-semibold mb-2">10. Contacto</p>
                    <p className="mb-4">
                        Para cualquier consulta relacionada con estos términos y condiciones, por favor contacta a mi correo electrónico: gonzaloadamie@gmail.com.
                    </p>
                </div>



                <div className="flex items-center mt-4">
                    <input
                        id="c1"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    <label htmlFor="c1" className="text-sm">
                        Acepto los términos y condiciones
                    </label>
                </div>
                <a href={isChecked ? "/pagar" : "#"}>
                <button
                    className={` btn-p mt-4 px-4 py-2 rounded bg-blue-500 text-white font-semibold ${isChecked ? 'activado' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isChecked}
                >
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <span>Empezar</span>
                </button>
                </a>
            </div>
        </div>
    );
};

export default Politica;
