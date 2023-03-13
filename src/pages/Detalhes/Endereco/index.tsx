
import stylesBase from 'styles/Base.module.scss';

interface Props {
  cep: string
  setCep: React.Dispatch<React.SetStateAction<string>>
  rua: string
  setRua: React.Dispatch<React.SetStateAction<string>>
  numero: Number
  setNumero: React.Dispatch<React.SetStateAction<Number>>
  cidade: string
  setCidade: React.Dispatch<React.SetStateAction<string>>
}

export default function Endereco({
  cep,
  setCep,
  rua,
  setRua,
  numero,
  setNumero,
  cidade,
  setCidade
}: Props) {
  return (
    <>
      <div className={stylesBase.container__titulo}>
        <h3>Endereço</h3>
      </div>
      <div className={stylesBase.grupoInputs}>
        <div className={stylesBase.grupoInputs__coluna}>
          <label htmlFor="ZipCode">ZipCode:</label>
          <input
            type='text'
            id='zipcode'
            name='zipcode'
            placeholder='Zip code'
            value={cep}
            onChange={e => setCep(e.target.value)}
          />
          <label htmlFor="Street">Street:</label>
          <input
            type='text'
            id='street'
            name='street'
            placeholder='Street'
            value={rua?.toUpperCase()}
            onChange={e => setRua(e.target.value)}
          />
        </div>
        <div className={stylesBase.grupoInputs__coluna}>
          <label htmlFor="Address Number">Address Number:</label>
          <input
            type='number'
            id='number'
            name='number'
            placeholder='Number'
            value={String(numero)}
            onChange={e => setNumero(Number(e.target.value))}
          />
          <label htmlFor="City">City:</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City'
            value={cidade?.toUpperCase()}
            onChange={e => setCidade(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}