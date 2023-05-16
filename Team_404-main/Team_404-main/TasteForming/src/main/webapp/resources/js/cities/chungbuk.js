$(document).ready(function () {
  $("#chungbuk").click(function () {
    // 새로운 ul 요소를 가져옴
    var chungbuk = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체<img class="District__Item__Button__Img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEu917FKA0EQBuDbF7CKIUWKFBb2BiSCkjS+R3oLH8F3yBNJQAvLRBBikSKQiErwCc5/ZBIml7vbnZ09D5ZdyOVjmZ292XV5no+zLHtAW6DdO+fm6M2PA/wD5YSlb/Qj4DOrTPALkL6AthhfA3+14AR3AUzRegL6xPgG+Fss7uiPTeB/cBP4Hk6NH8ACf8aYYr971DE/ghmnhaQFjcZLYQ9+hWx592VLJVyDbzjPa/Fa2IJ7YYHTgnZECGpnHgQzfsYLGoQHw1pcBWtwNezBB0jFJb0TBQv8CeNTsaArTsVlNMz4OfpHtHYBvzTBAqft3xL4JBVcnLUNRoEoC8UHZn4RPWOgtGGKi7ffjVEwoxTXyl2ohkNQdR6HoipYgwbDQHt4Oe1nk9Fi/fNWkZjSRBXbW/diimnQ0ev/yn9FTG0HFj4cmk9BB+mW+sTZ3DE29Ux3H/uyq8IXfhymuCrIyw3dPyhPzTcnmvEdsAnaGu02BUrh+AU3Het2tPvd3gAAAABJRU5ErkJggg=="
                alt=""></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">청주</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">제천</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">충주</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">단양</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">오창</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">진천</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">옥천</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">음성</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">오송</span></button></li>
  <li class="District__Item"><button class="District__Item__Button false" id="gesangun">괴산군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="danyanggun">단양군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="boeungun">보은군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="youngdonggun">영동군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="occhungun">옥천군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="umsunggun">음성군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jechunsi">제천시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jungpyeonggun">증평군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jinchungun">진천군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="chungjusi">청주시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="sangdanggu">청주시 상당구</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="seowongu">청주시 서원구</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="chungwongu">청주시 청원구</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="hungdunggu">청주시 흥덕구</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="chungjusi">충주시</button></li>
</ul>`;

    $(".District__List__Box").children(":nth-child(2), :nth-child(3)").remove();
    // 새로운 ul 요소를 추가
    $(".District__List__Box").append(chungbuk);

    $(document).ready(function () {
      $(".District__List").each(function () {
        $(this)
          .find(".District__Item__Button")
          .click(function () {
            // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
            $(this)
              .parents(".District__List")
              .find(".District__Item__Button.now")
              .removeClass("now");
            // 클릭한 요소에 'now' 클래스 추가
            $(this).addClass("now");
            if (!$(this).find(".District__Item__Button__Img").length) {
              $(this).append(
                '<img class="District__Item__Button__Img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEu917FKA0EQBuDbF7CKIUWKFBb2BiSCkjS+R3oLH8F3yBNJQAvLRBBikSKQiErwCc5/ZBIml7vbnZ09D5ZdyOVjmZ292XV5no+zLHtAW6DdO+fm6M2PA/wD5YSlb/Qj4DOrTPALkL6AthhfA3+14AR3AUzRegL6xPgG+Fss7uiPTeB/cBP4Hk6NH8ACf8aYYr971DE/ghmnhaQFjcZLYQ9+hWx592VLJVyDbzjPa/Fa2IJ7YYHTgnZECGpnHgQzfsYLGoQHw1pcBWtwNezBB0jFJb0TBQv8CeNTsaArTsVlNMz4OfpHtHYBvzTBAqft3xL4JBVcnLUNRoEoC8UHZn4RPWOgtGGKi7ffjVEwoxTXyl2ohkNQdR6HoipYgwbDQHt4Oe1nk9Fi/fNWkZjSRBXbW/diimnQ0ev/yn9FTG0HFj4cmk9BB+mW+sTZ3DE29Ux3H/uyq8IXfhymuCrIyw3dPyhPzTcnmvEdsAnaGu02BUrh+AU3Het2tPvd3gAAAABJRU5ErkJggg==">'
              );
            }
          });
      });
    });

    $(document).ready(function () {
      $(".all").click(function () {
        // 새로운 ul 요소를 가져옴
        var all = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(all);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#gesangun").click(function () {
        // 새로운 ul 요소를 가져옴
        var gesangun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">감물면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">괴산읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문광면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">불정면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사리면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소수면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연풍면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장연면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">칠성면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(gesangun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#danyanggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var danyanggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">가곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">단성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">단양읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대강면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">매포읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">어상천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영춘면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">적성면</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(danyanggun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#boeungun").click(function () {
        // 새로운 ul 요소를 가져옴
        var boeungun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">속리산</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">내북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마로면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보은읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산외면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼승면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">속리산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수한면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">탄부면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">회남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">회인면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(boeungun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#youngdonggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var youngdonggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">매곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상촌면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">심천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">양강면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">양산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영동읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용화면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">추풍령면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">학산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황간면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(youngdonggun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#occhungun").click(function () {
        // 새로운 ul 요소를 가져옴
        var occhungun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">군서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동이면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안내면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥천읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청성면</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(occhungun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#umsunggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var umsunggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">감곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금왕읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대소면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">맹동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">생극면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소이면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">음성읍</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(umsunggun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#jechunsi").click(function () {
        // 새로운 ul 요소를 가져옴
        var jechunsi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">충주호</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">강제동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대랑동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">두학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명지동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">모산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백운면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉양읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서부동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송학면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신백동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">왕암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">의림동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">자작동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장락동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙로</button></li>
    <li class="District__Item"><button class="District__Item__Button false">천남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청전동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청풍면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">하소동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">한수면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">흑석동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jechunsi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#jungpyeonggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var jungpyeonggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">증평읍</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jungpyeonggun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#jinchungun").click(function () {
        // 새로운 ul 요소를 가져옴
        var jinchungun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광혜원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕산읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문백면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이월면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진천읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">초평면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jinchungun);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#chungjusi").click(function () {
        // 새로운 ul 요소를 가져옴
        var chungjusi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상당구</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서원구</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청원구</button></li>
    <li class="District__Item"><button class="District__Item__Button false">흥덕구</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(chungjusi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#sangdanggu").click(function () {
        // 새로운 ul 요소를 가져옴
        var sangdanggu = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">대청호</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">청주성안길</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">가덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남문로</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남일면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남주동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">낭성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문의면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">방서동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북문로</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서문동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서운동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영운동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용담동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운동동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월오동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지북동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">탑동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평촌동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(sangdanggu);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#seowongu").click(function () {
        // 새로운 ul 요소를 가져옴
        var seowongu = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">충북대</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">충대중문</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">개신동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남이면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">모충동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">분평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사직동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사창동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽림동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">현도면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(seowongu);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#chungwongu").click(function () {
        // 새로운 ul 요소를 가져옴
        var chungwongu = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">오창</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">강서동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내수읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북이면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오동동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오창읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">외남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">외평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">외하동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">우암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">율량동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정북동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정상동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정하동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주중동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(chungwongu);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#hungdunggu").click(function () {
        // 새로운 ul 요소를 가져옴
        var hungdunggu = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">오송</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">충북대</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">지웰시티</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">하복대</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">가경동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">강내면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">강서동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동막동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">복대동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">비하동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상신동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석소동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성화개신죽림동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송절동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수의동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신대동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신봉동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신전동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오송읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">외북동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정봉동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지동동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">향정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">현암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화계동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">휴암동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(hungdunggu);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    $(document).ready(function () {
      $("#chungjusi").click(function () {
        // 새로운 ul 요소를 가져옴
        var chungjusi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">충주호</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">가주동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금가면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금릉동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노은면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">단월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">달천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대소원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동량면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">목벌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">목행동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉방동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산척면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">살미면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성내동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성서동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소태면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수안보면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신니면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안림동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">앙성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">엄정면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연수동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용관동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용두동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용탄동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">종민동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주덕읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙탑면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">직동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">충의동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">충인동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">칠금동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">풍동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">호암동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(chungjusi);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
  });
});
