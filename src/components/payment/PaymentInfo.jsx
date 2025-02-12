
import { handleFocusChange, handleInputChange, processPayment} from "../PaymentForms";


// PaymentInfo.jsx
const PaymentInfo = () => {
	return <div class="space-y-4">
	<form>
	<div class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">
		<label for="number" class="block text-sm font-mono mb-2">Número de la tarjeta</label>
		<input
			type="text"
			name="number"
			id="number"
			maxlength="16"
			class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none"
			onchange={handleInputChange}
			onfocus={handleFocusChange}
		/>
	</div>
	<div class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">
		<label for="name" class="block text-sm font-mono mb-2">Nombre</label>
		<input
			type="text"
			name="name"
			id="name"
			maxlength="30"
			class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none"
			onchange={handleInputChange}
			onfocus={handleFocusChange}
		/>
	</div>
	<div class="form-row">
		<div class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">
			<label for="expiry" class="block text-sm font-mono mb-2">Fecha de expiración</label>
			<input
				type="text"
				name="expiry"
				id="expiry"
				maxlength="4"
				class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none"
				onchange={handleInputChange}
				onfocus={handleFocusChange}
			/>
		</div>
		<div class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">
			<label for="cvc" class="block text-sm font-mono mb-2">CVC</label>		
			<input
				type="text"
				name="cvc"
				id="cvc"
				maxlength="4"
				class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none"
				onchange={handleInputChange}
				onfocus={handleFocusChange}
			/>
		</div>
	</div>
	<button onclick={processPayment} type="button" class="w-full p-2 bg-kaya-dark brutalist-border focus:outline-none">Pagar</button>
	</form>
	</div>;
  };
  
  export default PaymentInfo; // ¡Esta línea es clave!
