type Props = {    
    message?: string | null 
  }
  
  export const FieldsErrorMessage = ({ message }: Props) =>
    message ? (
      <div aria-live="polite" className="mt-2 text-sm text-red-500">        
          <p key={message}>{message}</p>        
      </div>
    ) : null;