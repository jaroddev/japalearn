<script lang="ts">
    import { notificator } from "../store/notification";
</script>

<div class="toast toast-{$notificator.state}">
    {$notificator.message}
</div>

<style>
    .toast {
        width: 200px;
        position: absolute;

        right: 100px;
        top: 100px;

        z-index: 100;

        text-align: center;

        padding: 20px 10px;
    }

    .toast-success {
        background-color: rgba(43, 214, 43, 0.581);
    }

    .toast-error {
        background-color: rgba(189, 42, 42, 0.629);
    }

    .toast-unseen {
        visibility: hidden;
    }
</style>
