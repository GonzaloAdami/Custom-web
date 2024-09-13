import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { getPlan } from '../Datos/datos';

const Card = () => {
    const navigate = useNavigate();
    const [isCardFlipped, setIsCardFlipped] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardMonth, setCardMonth] = useState('');
    const [cardYear, setCardYear] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [focusElementStyle, setFocusElementStyle] = useState(null);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const currentPlan = getPlan();
    const currentCardBackground = useMemo(() => Math.floor(Math.random() * 25 + 1), []);

    const amexCardMask = "#### ###### #####";
    const otherCardMask = "#### #### #### ####";

    const getCardType = useMemo(() => {
        let number = cardNumber;
        let re = /^4/;
        if (number.match(re)) return "visa";

        re = /^(34|37)/;
        if (number.match(re)) return "amex";

        re = /^5[1-5]/;
        if (number.match(re)) return "mastercard";

        re = /^6011/;
        if (number.match(re)) return "discover";

        re = /^9792/;
        if (number.match(re)) return 'troy';

        return "visa";
    }, [cardNumber]);

    const generateCardNumberMask = useMemo(() => {
        return getCardType === "amex" ? amexCardMask : otherCardMask;
    }, [getCardType]);

    const minCardMonth = useMemo(() => {
        return cardYear === new Date().getFullYear().toString() ? new Date().getMonth() + 1 : 1;
    }, [cardYear]);

    const minCardYear = new Date().getFullYear();

    const flipCard = (status) => {
        setIsCardFlipped(status);
    };

    const focusInput = (e) => {
        setIsInputFocused(true);
        const targetRef = e.target.dataset.ref;
        const target = document.querySelector(`[data-ref="${targetRef}"]`);
        if (target) {
            setFocusElementStyle({
                width: `${target.offsetWidth}px`,
                height: `${target.offsetHeight}px`,
                transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
            });
        }
    };

    const blurInput = () => {
        setTimeout(() => {
            if (!isInputFocused) {
                setFocusElementStyle(null);
            }
        }, 300);
        setIsInputFocused(false);
    };

    useEffect(() => {
        document.getElementById("cardNumber").focus();
    }, []);

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };

    const handlePayment = () => {
        navigate('/pagado');
    };

    // Verifica si todos los campos están completos y se ha seleccionado un plan
    const isFormValid = () => {
        return (
            cardNumber.length > 0 &&
            cardName.length > 0 &&
            cardMonth.length > 0 &&
            cardYear.length > 0 &&
            cardCvv.length > 0 &&
            selectedPlan !== null
        );
    };

    return (
        <div className='section-card'>
            <div className="wrapper" id="app">
                <div className="card-form">
                    <div className="card-list">
                        <div className={`card-item ${isCardFlipped ? '-active' : ''}`}>
                            <div className="card-item__side -front">
                                <div className="card-item__focus" style={focusElementStyle}></div>
                                <div className="card-item__cover">
                                    <img
                                        src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`}
                                        alt=""
                                        className="card-item__bg"
                                    />
                                </div>
                                <div className="card-item__wrapper">
                                    <div className="card-item__top">
                                        <img
                                            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                                            alt="chip"
                                            className="card-item__chip"
                                        />
                                        <div className="card-item__type">
                                            <img
                                                src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType}.png`}
                                                alt=""
                                                className="card-item__typeImg"
                                            />
                                        </div>
                                    </div>
                                    <label htmlFor="cardNumber" className="card-item__number">
                                        {cardNumber}
                                    </label>
                                    <div className="card-item__content">
                                        <label htmlFor="cardName" className="card-item__info">
                                            <div className="card-item__holder">Nombre del titular</div>
                                            <div className="card-item__name">
                                                {cardName.length ? (
                                                    <span className="card-item__nameItem">
                                                        {cardName}
                                                    </span>
                                                ) : (
                                                    "Full Name"
                                                )}
                                            </div>
                                        </label>
                                        <div className="card-item__date">
                                            <label htmlFor="cardMonth" className="card-item__dateTitle">Valid Thru</label>
                                            <label htmlFor="cardMonth" className="card-item__dateItem">
                                                {cardMonth || 'MM'}
                                            </label>
                                            /
                                            <label htmlFor="cardYear" className="card-item__dateItem">
                                                {cardYear ? cardYear.slice(2, 4) : 'YY'}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-item__side -back">
                                <div className="card-item__cover">
                                    <img
                                        src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`}
                                        alt=""
                                        className="card-item__bg"
                                    />
                                </div>
                                <div className="card-item__band"></div>
                                <div className="card-item__cvv">
                                    <div className="card-item__cvvTitle">CVV</div>
                                    <div className="card-item__cvvBand">
                                        {cardCvv.split('').map((n, index) => (
                                            <span key={index}>*</span>
                                        ))}
                                    </div>
                                    <div className="card-item__type">
                                        <img
                                            src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType}.png`}
                                            alt=""
                                            className="card-item__typeImg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-form__inner">
                        <div className="card-input">
                            <label htmlFor="cardNumber" className="card-input__label">Número de tarjeta</label>
                            <input
                                type="number"
                                id="cardNumber"
                                className="card-input__input"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                onFocus={focusInput}
                                onBlur={blurInput}
                                autoComplete="off"
                            />
                        </div>
                        <div className="card-input">
                            <label htmlFor="cardName" className="card-input__label">Nombre del titular</label>
                            <input
                                type="text"
                                id="cardName"
                                className="card-input__input"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                onFocus={focusInput}
                                onBlur={blurInput}
                                autoComplete="off"
                            />
                        </div>
                        <div className="card-form__row">
                            <div className="card-form__col">
                                <div className="card-form__group">
                                    <label htmlFor="cardMonth" className="card-input__label">Fecha de vencimiento</label>
                                    <select
                                        className="card-input__input -select"
                                        id="cardMonth"
                                        value={cardMonth}
                                        onChange={(e) => setCardMonth(e.target.value)}
                                        onFocus={focusInput}
                                        onBlur={blurInput}
                                    >
                                        <option value="" disabled>Mes</option>
                                        {[...Array(12).keys()].map((n, index) => (
                                            <option key={index} value={n + 1}>
                                                {n + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        className="card-input__input -select"
                                        id="cardYear"
                                        value={cardYear}
                                        onChange={(e) => setCardYear(e.target.value)}
                                        onFocus={focusInput}
                                        onBlur={blurInput}
                                    >
                                        <option value="" disabled>Año</option>
                                        {[...Array(12).keys()].map((n, index) => (
                                            <option key={index} value={minCardYear + index}>
                                                {minCardYear + index}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="card-form__col -cvv">
                                <div className="card-input">
                                    <label htmlFor="cardCvv" className="card-input__label">CVV</label>
                                    <input
                                        type="number"
                                        className="card-input__input"
                                        id="cardCvv"
                                        maxLength="4"
                                        value={cardCvv}
                                        onChange={(e) => setCardCvv(e.target.value)}
                                        onFocus={() => flipCard(true)}
                                        onBlur={() => flipCard(false)}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="cardName" className="card-input__label">Monto a pagar</label>
                        <div className='planes'>
                            <div className="flex flex-col rounded-3xl plan">
                                <div className="px-5 py-1 sm:p-10 sm:pb-6">
                                    <div className="grid gap items-center justify-center w-full grid-cols-1 text-left">
                                        <div>
                                            <h2 className="text-lg font-medium tracking-tighter card-input__label lg:text-3xl">
                                                Plan Premium
                                            </h2>
                                        </div>
                                        <div className="mt-1">
                                            <p>
                                                <div className='price'>
                                                    <span className="text-5xl font-light tracking-tight text-blue">
                                                        $699.99
                                                    </span>
                                                    <span className="text-base font-medium text-blue"> /USD </span>
                                                </div>
                                            </p>
                                        </div>
                                        <label className="switch mt-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedPlan === 'premium'}
                                                onChange={() => handlePlanChange('premium')}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-3xl plan">
                                <div className="px-5 py-1 sm:p-10 sm:pb-6">
                                    <div className="grid gap items-center justify-center w-full grid-cols-1 text-left">
                                        <div>
                                            <h2 className="text-lg font-medium tracking-tighter card-input__label lg:text-3xl">
                                                Plan Básico
                                            </h2>
                                        </div>
                                        <div className="mt-1">
                                            <p>
                                                <div className='price'>
                                                    <span className="text-5xl font-light tracking-tight text-blue">
                                                        $299.99
                                                    </span>
                                                    <span className="text-base font-medium text-blue"> /USD </span>
                                                </div>
                                            </p>
                                        </div>
                                        <label className="switch mt-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedPlan === 'basic'}
                                                onChange={() => handlePlanChange('basic')}                                            
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className={`card-form__button ${isFormValid() ? 'completado' : ''}`}
                            onClick={handlePayment}
                            disabled={!isFormValid()} // Desactiva el botón si el formulario no es válido
                        >
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
