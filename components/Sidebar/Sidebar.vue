<template>
  <div>
    <aside class="bg-white br b--black-10 sidebar"
           :style="sidebarStyles"
           :class="{'sidebar--is-open': isOpen}">
      <!-- <sidebar-header v-if="showHeader"
                      :title="title"
                      @close="$emit('close')"/> -->
      <div class="sidebar-content">
        <slot/>
      </div>
    </aside>
    <!-- <sidebar-overlay v-if="showOverlay" 
                     :is-visible="isOpen"
                     :animation-timing="animationTiming"
                     :opacity="overlayOpacity"
                     @close="$emit('close')"/> -->
  </div>
</template>

<script>
import SidebarHeader from './SidebarHeader';
import SidebarOverlay from './SidebarOverlay';

export default {
  props: {
    title: {
      type: String,
      default: 'Sidebar'
    },
    position: {
      type: String,
      default: 'left'
    },
    width: {
      type: String,
      default: '200px'
    },
    animationTiming: {
      type: String,
      default: '0.2s'
    },
    overlayOpacity: {
      type: Number,
      default: 0.7
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showOverlay: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    sidebarStyles: function() {
      const stylesObj = {
        width: this.width,
        transition: `transform ${this.animationTiming} ease`
      };
      const positionObj =
        this.position === 'right' ? { right: 0 } : { left: 0 };
      const transformObj =
        this.position === 'right'
          ? { transform: `translateX(${this.width})` }
          : { transform: `translateX(-${this.width})` };

      return Object.assign(stylesObj, positionObj, transformObj);
    }
  },
  components: {
    SidebarHeader,
    SidebarOverlay
  }
};
</script>

<style scoped>
/* Turn on custom 8px wide scrollbar */
::-webkit-scrollbar {
  width: 8px; /* 1px wider than Lion. */
  /* This is more usable for users trying to click it. */
  background-color: rgba(0, 0, 0, 0);
  -webkit-border-radius: 100px;
}
/* hover effect for both scrollbar area, and scrollbar 'thumb' */
::-webkit-scrollbar:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

/* The scrollbar 'thumb' ...that marque oval shape in a scrollbar */
::-webkit-scrollbar-thumb:vertical {
  /* This is the EXACT color of Mac OS scrollbars. 
     Yes, I pulled out digital color meter */
  background: rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 100px;
}
::-webkit-scrollbar-thumb:vertical:active {
  background: rgba(0, 0, 0, 0.61); /* Some darker color when you click it */
  -webkit-border-radius: 100px;
}
.sidebar {
  position: fixed;
  top: 53px;
  height: calc(100vh - 53px);
  z-index: 100;
}

.sidebar--is-open {
  transform: translateX(0) !important;
}

.sidebar-content {
  /* margin-top: 61px; */
  height: calc(100vh - 53px);
  overflow-y: auto;
}
</style>
