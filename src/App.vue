<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" :sticky=true>
       <b-navbar-brand :to="{ name: 'Home' }">
          <img src="./assets/logo.png" class="d-inline-block align-middle" alt="logo">
          AC베이스볼
        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" :to="{ name: 'Notices' }">공지사항</b-nav-item>
          <b-nav-item href="#">성인 이용안내</b-nav-item>
          <b-nav-item :to="{ name: 'Schedule' }">레슨 예약</b-nav-item>
          <b-nav-item href="#" disabled>유소년 이용안내(예정)</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">검색</b-button>
          </b-nav-form>
          
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">My페이지</b-dropdown-item>
            <b-dropdown-item href="#">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
</div>
</template>
