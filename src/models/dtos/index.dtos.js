import {
      SaveUserDTO,
      LoadUserDTO,
      GetUserDTO,
      UpdateUserDTO,
      DeleteUserDTO,
      LoadAdminDTO,
} from "./users/users.dto.js";

import {
      SaveProductDTO
} from "./products/products.dto.js";

import {
      GetCartDTO,
      SaveCartDTO,
      AddProductDTO,
      DeleteProductDTO,
      PurchaseCartDTO
} from "./carts/carts.dto.js";

export const getDTOS = () => ({
      SaveUserDTO,
      LoadUserDTO,
      GetUserDTO,
      UpdateUserDTO,
      DeleteUserDTO,
      LoadAdminDTO,
      GetCartDTO,
      SaveCartDTO,
      AddProductDTO,
      DeleteProductDTO,
      PurchaseCartDTO,
      SaveProductDTO
});