$(document).ready(function () {
  $("#jeonbuk").click(function () {
    // 새로운 ul 요소를 가져옴
    var jeonbuk = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체<img class="District__Item__Button__Img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEu917FKA0EQBuDbF7CKIUWKFBb2BiSCkjS+R3oLH8F3yBNJQAvLRBBikSKQiErwCc5/ZBIml7vbnZ09D5ZdyOVjmZ292XV5no+zLHtAW6DdO+fm6M2PA/wD5YSlb/Qj4DOrTPALkL6AthhfA3+14AR3AUzRegL6xPgG+Fss7uiPTeB/cBP4Hk6NH8ACf8aYYr971DE/ghmnhaQFjcZLYQ9+hWx592VLJVyDbzjPa/Fa2IJ7YYHTgnZECGpnHgQzfsYLGoQHw1pcBWtwNezBB0jFJb0TBQv8CeNTsaArTsVlNMz4OfpHtHYBvzTBAqft3xL4JBVcnLUNRoEoC8UHZn4RPWOgtGGKi7ffjVEwoxTXyl2ohkNQdR6HoipYgwbDQHt4Oe1nk9Fi/fNWkZjSRBXbW/diimnQ0ev/yn9FTG0HFj4cmk9BB+mW+sTZ3DE29Ux3H/uyq8IXfhymuCrIyw3dPyhPzTcnmvEdsAnaGu02BUrh+AU3Het2tPvd3gAAAABJRU5ErkJggg=="
                alt=""></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">전주</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">군산</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">익산</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">남원</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">고창</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">부안</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">전주한옥마을</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">선유도</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">완주</span></button></li>
<li class="District__Item"><button class="District__Item__Button false" id="gochanggun">고창군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="gunsansi">군산시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="kimjesi">김제시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="namwonsi">남원시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="mujugun">무주군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="buangun">부안군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="sunchanggun">순창군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="wonjugun">완주군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="icsansi">익산시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="imsilgun">임실군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jangsugun">장수군</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jeonjusi">전주시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="duckjingu">전주시 덕진구</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="wonsangu">전주시 완산구</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jungumsi">정읍시</button></li>
<li class="District__Item"><button class="District__Item__Button false" id="jinangun">진안군</button></li>
</ul>`;

    $(".District__List__Box").children(":nth-child(2), :nth-child(3)").remove();
    // 새로운 ul 요소를 추가
    $(".District__List__Box").append(jeonbuk);

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
      $("#gochanggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var gochanggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">선운사</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">고수면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고창읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">공음면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">무장면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상하면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성내면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성송면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신림면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">심원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">아산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해리면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">흥덕면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(gochanggun);
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
      $("#gunsansi").click(function () {
        // 새로운 ul 요소를 가져옴
        var gunsansi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">새만금</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">개복동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">개사동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">개정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">개정면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">경암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">경장동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금광동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">나운동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">나포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내초동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대야면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동흥남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">둔율동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미원동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미장동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">비응도동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산북동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서수면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서흥남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">선양동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송창동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송풍동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수송동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신관동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신영동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신창동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신풍동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오식도동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥구읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥도면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">임피면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장미동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장재동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">조촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙로</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">창성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">해망동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">회현면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(gunsansi);
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
      $("#kimjesi").click(function () {
        // 새로운 ul 요소를 가져옴
        var kimjesi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">갈공동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">검산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">공덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광활면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금구면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">난봉동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도장동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">만경읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백구면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">복죽동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부량면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상동동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">순동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신풍동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">양전동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옥산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">요촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용지면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월봉동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">입석동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">제월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진봉면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청하면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">하동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">흥사동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(kimjesi);
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
      $("#namwonsi").click(function () {
        // 새로운 ul 요소를 가져옴
        var namwonsi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">갈치동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고죽동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">광치동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금지면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내척동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대강면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕과면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도통동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동충동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보절면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">사매면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산내면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수지면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">식정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">쌍교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">아영면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">어현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">왕정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운봉읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월락동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이백면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인월면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">조산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주생면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽항동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">천거동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">하정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">향교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">효자동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(namwonsi);
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
      $("#mujugun").click(function () {
        // 새로운 ul 요소를 가져옴
        var mujugun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">무주읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">무풍면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">설천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">적상면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(mujugun);
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
      $("#buangun").click(function () {
        // 새로운 ul 요소를 가져옴
        var buangun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">변산</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">변산반도</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">계화면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동진면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">변산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부안읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">위도면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">줄포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">하서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">행안면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(buangun);
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
      $("#sunchanggun").click(function () {
        // 새로운 ul 요소를 가져옴
        var sunchanggun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구림면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금과면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동계면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">복흥면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">순창읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">쌍치면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">유등면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인계면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">적성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">팔덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">풍산면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(sunchanggun);
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
      $("#wonjugun").click(function () {
        // 새로운 ul 요소를 가져옴
        var wonjugun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">경천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구이면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동상면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉동읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">비봉면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼례읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상관면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소양면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용진읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운주면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화산면</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(wonjugun);
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
      $("#icsansi").click(function () {
        // 새로운 ul 요소를 가져옴
        var icsansi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">원광대</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">갈산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금강동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금마면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남중동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">낭산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕기동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">만석동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">망성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">모현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">목천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부송동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼기면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석왕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석탄동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성당면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신용동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">어양동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">여산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영등동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오산면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">왕궁면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용안면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용제동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">웅포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">은기동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">임상동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정족동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">창인동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">춘포면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">팔봉동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">함라면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">함열읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">현영동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황등면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(icsansi);
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
      $("#imsilgun").click(function () {
        // 새로운 ul 요소를 가져옴
        var imsilgun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">강진면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">관촌면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕치면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼계면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성수면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신덕면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신평면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">오수면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">임실읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">지사면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청웅면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(imsilgun);
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
      $("#jangsugun").click(function () {
        // 새로운 ul 요소를 가져옴
        var jangsugun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">계남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">계북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">번암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장계면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장수읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">천천면</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jangsugun);
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
      $("#jeonjusi").click(function () {
        // 새로운 ul 요소를 가져옴
        var jeonjusi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕진구</button></li>
    <li class="District__Item"><button class="District__Item__Button false">완산구</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jeonjusi);
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
      $("#duckjingu").click(function () {
        // 새로운 ul 요소를 가져옴
        var duckjingu = `
<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">아중리</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">강흥동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고랑동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금상동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노송동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕진동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도도동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">만성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">반월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성덕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">여의동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">우아동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인후동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">전미동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진북동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">팔복동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">호성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">화전동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(duckjingu);
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
      $("#wonsangu").click(function () {
        // 새로운 ul 요소를 가져옴
        var wonsangu = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">전주한옥마을</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">전주신시가지</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">전북도청</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">전주시청</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false">경원동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고사동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남노송동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">다가동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동서학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동완산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼천동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상림동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">색장동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서노송동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서서학동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서신동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서완산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석구동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용복동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원당동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">인후동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">전동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중노송동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중앙동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중인동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">중화산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">태평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">팔복동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평화동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">풍남동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">효자동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(wonsangu);
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
      $("#jungumsi").click(function () {
        // 새로운 ul 요소를 가져옴
        var jungumsi = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">감곡면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고부면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">공평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">과교동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">구룡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금붕동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내장동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">농소동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">덕천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">망제동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부전동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">북면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산내면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산외면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">삼산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소성면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">시기동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신월동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신태인읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false">쌍암동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연지동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영원면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영파동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">옹동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용계동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">이평면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">입암면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장명동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정우면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">초산동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">칠보면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">태인면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">하모동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">하북동</button></li>
    <li class="District__Item"><button class="District__Item__Button false">흑암동</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jungumsi);
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
      $("#jinangun").click(function () {
        // 새로운 ul 요소를 가져옴
        var jinangun = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동향면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">마령면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">백운면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부귀면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상전면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성수면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">안천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용담면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">주천면</button></li>
    <li class="District__Item"><button class="District__Item__Button false">진안읍</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jinangun);
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
