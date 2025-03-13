


export const mapResponseToDTO = <U, T>(responseDTO: U, propertyMappings?: Record<string, keyof T>): T => { 
      // Create an empty object that will hold the mapped DTO
  const mappedDTO: Partial<T> = {};

  // Loop through each property in the responseDTO
  for (const key in responseDTO) {
    // Check if propertyMappings exist and if the current key is in propertyMappings
    if (propertyMappings && key in propertyMappings) {
      // If there is a mapping for the current key, use it to set the property in the mappedDTO
      mappedDTO[propertyMappings[key] as keyof T] = responseDTO[
        key
      ] as unknown as T[keyof T];
    } else {
      // If there is no mapping for the current key, use the key as is to set the property in the mappedDTO
      mappedDTO[key as unknown as keyof T] = responseDTO[
        key
      ] as unknown as T[keyof T];
    }
  }

  // Return the mappedDTO as a type T
  return mappedDTO as T;
}

 
/**
 * Utility function for mapping between DTO (Data Transform Object) and Object Model
 *
 * @see {@link https://github.com/twistezo/ts-dto-mapper} for further information
 *
 * @example
 * // from DTO:
 * const foo: Foo = mapDTO<FooDTO, Foo>({ from: fooDTO })
 *   .transform((fooDTO: FooDTO): Foo => ({
 *     // access to `fooDTO` object
 *   }))
 *
 * @example
 * // to DTO:
 * const fooDTO: FooDTO = mapDTO<Foo, FooDTO>({ from: foo })
 *   .transform((foo: Foo): FooDTO => ({
 *     // access to `foo` object
 *   }))
 */
export const mapDTO = <From = unknown, To = unknown>({
  from,
}: {
  from: From
}): {
  transform: (callback: (from: From) => To) => To
} => ({
  transform: callback => callback(from),
})